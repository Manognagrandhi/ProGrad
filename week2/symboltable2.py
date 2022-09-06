class table:
    def __init__(self, user_address, user_label, user_datatype):
        self.address = user_address
        self.label = user_label
        self.datatype = user_datatype

data = [[] for _ in range(5)]
while True:
    print("1.Insert")
    print("2.Search")
    print("3.Display")
    print("0.Exit")
    choice = int(input("\nEnter your choice :"))

    if choice == 0:
        break
    elif choice == 1:
        n = int(input("Enter the number of Symbols = "))
        for i in range(n):
            address = int(input(f"Enter the Address of Symbol {i + 1} = "))
            label = input(f"Enter the Label of Symbol {i + 1} = ")
            datatype = input(f"Enter the Datatype of Symbol {i + 1} = ")
            h= len(label) % 5
            data[h].append(table(address, label, datatype))
    elif choice == 2:
        key_label = input("\nEnter the label = ")
        m = len(key_label) % 5
        flag = True
        for i in data[m]:
            if i.label == key_label:
                print(f"\nAddress = {i.address}")
                print(f"Datatype = {i.datatype}")
                print(f"Label = {i.label}\n\n")
                flag = False
                break
        if flag:
            print("\nNot Available")
    elif choice == 3:
        for i in data:
            for j in i:
                print(f"\nAddress = {j.address}")
                print(f"Datatype = {j.datatype}")
                print(f"Label = {j.label}\n\n")
    else:
        print("Invalid")
