from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# In-memory cart storage (use DB in real apps)
cart_storage = {}

# Email config
EMAIL_ADDRESS = "adanfatimamalik6e@gmail.com"
EMAIL_PASSWORD = "jbgevlqugrwmufct"
RECIPIENT_EMAIL = "adanfatimamalik6e@gmail.com"

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_file(path):
    return send_from_directory('.', path)

# 🔧 Cart API
@app.route('/api/cart', methods=['POST'])
def handle_cart():
    data = request.json
    user_id = data.get('user_id')
    action = data.get('action')

    if user_id not in cart_storage:
        cart_storage[user_id] = []

    if action == 'add':
        cart_storage[user_id].append(data['item'])
        return jsonify({"success": True})

    elif action == 'remove':
        cart_storage[user_id] = [
            item for item in cart_storage[user_id]
            if not (item['id'] == data['item_id'] and item['size'] == data['size'] and item['color'] == data['color'])
        ]
        return jsonify({"success": True})

    elif action == 'update':
        for item in cart_storage[user_id]:
            if item['id'] == data['item']['id'] and item['size'] == data['item']['size'] and item['color'] == data['item']['color']:
                item['quantity'] = data['item']['quantity']
        return jsonify({"success": True})

    elif action == 'clear':
        cart_storage[user_id] = []
        return jsonify({"success": True})

    elif action == 'get':
        return jsonify({"success": True, "cart": cart_storage[user_id]})

    return jsonify({"success": False, "message": "Invalid action"}), 400

# 🛒 Order Processing
@app.route('/process_order', methods=['POST'])
def process_order():
    try:
        order_data = request.json
        print("📥 Order received:", order_data)

        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = RECIPIENT_EMAIL
        msg['Subject'] = f"🛒 New Order from {order_data['customer']['name']}"

        # HTML email content
        html = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                    <h1 style="color: #4CAF50;">📦 New Order Received!</h1>
                    
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
                        <h2 style="color: #333; margin-top: 0;">👤 Customer Details</h2>
                        <p><strong>Name:</strong> {order_data['customer']['name']}</p>
                        <p><strong>Phone:</strong> {order_data['customer']['phone']}</p>
                        <p><strong>Address:</strong> {order_data['customer']['address']}</p>
                    </div>
                    
                    <div style="margin-bottom: 20px;">
                        <h2 style="color: #333;">🛍️ Order Items</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background-color: #f2f2f2;">
                                    <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Item</th>
                                    <th style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">Qty</th>
                                    <th style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">Price</th>
                                </tr>
                            </thead>
                            <tbody>
        """
        
        for item in order_data['items']:
            html += f"""
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">{item['name']}</td>
                                    <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">x{item['quantity']}</td>
                                    <td style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">Rs. {item['price']}</td>
                                </tr>
            """
        
        html += f"""
                            </tbody>
                        </table>
                    </div>
                    
                    <div style="text-align: right; font-size: 1.2em; font-weight: bold;">
                        💰 Total: Rs. {order_data['total']}
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; text-align: center; color: #777;">
                        <p>Thank you for using our service!</p>
                    </div>
                </div>
            </body>
        </html>
        """
        
        msg.attach(MIMEText(html, 'html'))

        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            smtp.send_message(msg)

        print("✅ Email sent successfully.")
        return jsonify({"success": True})

    except Exception as e:
        print("❌ Failed to send order email:", str(e))
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)