import sys
from ast import literal_eval

def get_type(input_data):
    try:
        return type(literal_eval(input_data))
    except (ValueError, SyntaxError):
        return str

def Check_Size(listName):
    for j in range(len(listName)):
        size = sys.getsizeof(listName[j])
        SizeOfElements.append(size)

print('''We have 4 data types in this symbol table
1) Integer
2) Float
3) Boolean
4) String
      ''')

Main_list = []
Integer_list = []
Float_List = []
Boolean_list = []
String_list = []
Other_datatype = []
SizeOfElements = []

n = True
while n:
    user_input = input("Enter the input = ")
    split_input = user_input.split(" ")
    ask = input("Do you want to give another input, if yes type 'y' else 'n' for no = ").lower()
    for i in range(len(split_input)):
        Main_list.append(split_input[i])
    if ask == 'y':
        continue
    else:
        n = False

for i in range(len(Main_list)):
    datatype = get_type(Main_list[i])
    if datatype is int:
        Integer_list.append(int(Main_list[i]))
    elif datatype is float:
        Float_List.append(float(Main_list[i]))
    elif datatype is bool:
        Boolean_list.append(bool(Main_list[i]))
    elif datatype is str:
        String_list.append(Main_list[i])
    else:
        Other_datatype.append(Main_list[i])

Check_Size(Integer_list)
Check_Size(Float_List)
Check_Size(Boolean_list)
Check_Size(String_list)

SymbolTable = {"Integers": Integer_list,
               "Floats": Float_List,
               "Boolean": Boolean_list,
               "Strings": String_list,
               "Other Data Types": Other_datatype,
               "Sizes of the inputs in order": SizeOfElements
               }

print(SymbolTable)
