import ollama
import time

print("-" * 50)

start = time.time()

response = ollama.chat(
    model="qwen2.5-coder:7b",
    messages=[
        {
            "role": "user",
            "content": "Answer with exactly one sentence: How many servos can a robot have?"
        }
    ],
    keep_alive="30m"
)

print(f"First/complete response time: {time.time() - start:.2f} seconds")
print()
print(response["message"]["content"])