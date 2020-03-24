import sys 
import pandas as pd
import json



df = pd.read_excel('./eds3_AMI.xlsx')


#print("Output from Python") 
#print("First name: " + sys.argv[1]) 
#print("Last name: " + sys.argv[2]) 
#print(df)


#a = "{ \"name\" : \"  "+sys.argv[1]+"  \" , \"age\" : \"37\"}"
#b = "{ \"name\" : \"  "+sys.argv[2]+"  \" , \"age\" : \"39\"}"
a = {'name' :sys.argv[1], 'age' :37}
b = {'name' :sys.argv[2], 'age' :39}
aa = json.dumps(a)
bb = json.dumps(b)
print(aa)
print(bb)
#print(json.dumps(df))
