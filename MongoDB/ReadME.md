# 📘 MongoDB CRUD Operations in Shell


## 📖 Introduction
The examples are written in a step-by-step format with both **commands** and **sample outputs**  
to make it easier for beginners to learn MongoDB.

---

## 📖 Installtion & 🚀 Usage
- Download MongoDB [Community Server](https://www.mongodb.com/try/download/community)  
- Set up the Environment Variables  
- Check installation: `WIN + R` → type `cmd` → run  
  ```bash
  mongod --version
- Download [MongoDB Shell](https://www.mongodb.com/try/download/shell)  
- Open Terminal/Command Prompt and run:  
  ```bash
  mongosh

---

## 🔹 Database & Collection Setup
- Switch DB (`use uni`)
- Check DB (`db`)
- Show collections (`show collections`)

---

## 🔹 Insert Operations
### 1. Insert One Document
- Example with `insertOne()`

### 2. Insert Many Documents
- Example with `insertMany()`

### 3. Insert with Nested Fields
- Example with nested object (`performance`)

---

## 🔹 Find Operations
### 1. Find All Documents
- Using `find()`

### 2. Find by Condition
- Using equality match (`age: 24`)
- Using `findOne()`
- Using multiple conditions (`marks:100, city:"Siwan"`)

### 3. Query Operators
- `$gt` (greater than)
- `$in` (in array)
- `$or` (OR condition)

### 4. Query Nested Fields
- Dot notation (`"performance.marks": 88`)

---

## 🔹 Delete Operations
### 1. Delete Many
- Example with `deleteMany({city: "Noida"})`

---

## 📌 Summary
- List CRUD operations supported:
  - Insert (`insertOne`, `insertMany`)
  - Find (`find`, `findOne`, query operators)
  - Nested queries
  - Delete (`deleteMany`)