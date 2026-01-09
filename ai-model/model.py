import sys
import os
from gradio_client import Client

# --- STEP 1: IMPORT LOCAL PREPROCESSING ---
# We still use your local Preprocessing folder to clean the text first
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.abspath(os.path.join(current_dir, '..'))
sys.path.append(parent_dir)

try:
    from Preprocessing.normalize import normalize_input
    print("✅ Local Preprocessing module loaded.")
except ImportError:
    print("❌ Could not load Preprocessing module.")
    sys.exit(1)

# --- CONFIGURATION ---
# This points directly to your Space
HF_SPACE_ID = "iammayankbhatt/disease-detector" 

def predict_disease(raw_text):
    """
    1. Clean the text locally.
    2. Send it to the Hugging Face Space.
    3. Return the result.
    """
    # 1. Local Preprocessing
    print(f"\n[Local] Raw Input: {raw_text}")
    clean_text = normalize_input(raw_text)
    print(f"[Local] Cleaned Text: {clean_text}")

    if not clean_text:
        return "No valid symptoms detected."

    # 2. Connect to Cloud Space
    try:
        print(f"[Cloud] Sending to {HF_SPACE_ID}...")
        client = Client(HF_SPACE_ID)
        
        # 3. Get Prediction
        # Note: 'api_name' depends on your Space's code. 
        # usually '/predict' for standard Gradio apps.
        result = client.predict(
            clean_text, 
            api_name="/predict_disease" 
        )
        return result

    except Exception as e:
        print(f"❌ Error connecting to Space: {e}")
        return "Error: Could not reach AI Model."

if __name__ == "__main__":
    # Simple test loop
    while True:
        text = input("\nEnter symptoms (or 'q' to quit): ")
        if text.lower() == 'q': 
            break
        
        prediction = predict_disease(text)
        print(f"Result: {prediction}")