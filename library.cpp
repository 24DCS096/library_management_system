#include <iostream>
#include <fstream>
using namespace std;

int main() {
    string title, author;
    int quantity;

    cout << "Enter Title: ";
    cin >> title;

    cout << "Enter Author: ";
    cin >> author;

    cout << "Enter Quantity: ";
    cin >> quantity;

    ofstream file("books.txt", ios::app);
    file << title << " " << author << " " << quantity << endl;

    file.close();

    cout << "Book Added Successfully!";
}
