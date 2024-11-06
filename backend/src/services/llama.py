# This example is the new way to use the OpenAI lib for python
from openai import OpenAI
import json
import tempfile

# script.py
import sys

# MAKE SURE NOTHING IS BEING PRINTED BUT THE RESPONSE
# RESPONSE ALSO GIVES THREE ``` ON EITHER END, REMOVE AFTER

def main():
    arg1 = sys.argv[1]
    # arg2 = sys.argv[2]
    print(f"Received arguments: {arg1}")
    client = OpenAI(
    api_key = "LA-8cef0a65fa154994b08f69f22897b0c618f390884ea34aa69c1d029fa9308b4c",
    base_url = "https://api.llama-api.com"
    )

    f = open(arg1, "r")
    prompt = f.read()
    f.close

    response = client.chat.completions.create(
    model="llama3.1-70b",
    messages=[
        # {"role": "system", "content": "Assistant is a large language model trained by OpenAI."},
        {"role": "user", "content": prompt}
    ],
        
    )

    # gets the whole response
    # print(response.model_dump_json(indent=2))

    # below gets just the message content
    
    output = response.choices[0].message.content
    with open("output.txt", 'w') as filetowrite:
        filetowrite.write(output)
    

    print(output)
    # print("LLM CALLED: ", prompt)

if __name__ == "__main__":
    main()



