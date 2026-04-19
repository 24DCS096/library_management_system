#include <iostream>
using namespace std;

struct Book {
    int id;
    string name;
    string author;
};

int main() {
    Book b[10];
    int n = 0, choice;

    while (true) {
        cout << "\n1.Add Book\n2.Display\n3.Exit\nChoice: ";
        cin >> choice;

        if (choice == 1) {
            cout << "Enter ID Name Author: ";
            cin >> b[n].id >> b[n].name >> b[n].author;
            n++;
        }
        else if (choice == 2) {
            for (int i = 0; i < n; i++) {
                cout << b[i].id << " " << b[i].name << " " << b[i].author << endl;
            }
        }
        else break;
    }
}
