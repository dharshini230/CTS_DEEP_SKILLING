# HANDS-ON 3
# Test Automation Process, Lifecycle & Framework Types

---

# Task 1: Automation Decision and Test Case Selection

## 1. Criteria for Deciding Whether to Automate a Test Case

### 1. Repetitive Test Cases
If a test case has to be executed again and again, it is a good choice for automation.

**Example:**  
The POST `/api/courses/` endpoint is tested every time a new build is released, so it should be automated.

---

### 2. Regression Testing
Regression tests check whether existing features still work after changes. These tests are usually repeated, so automation saves time.

**Example:**  
Verify that the API returns status code **201** after adding a new course.

---

### 3. Stable Features
If a feature does not change often, automation is useful because the script can be reused.

**Example:**  
The course creation API rarely changes, so it is suitable for automation.

---

### 4. Data-Driven Testing
When the same test is executed with different input values, automation is very helpful.

**Example:**  
Test course creation with different course names, IDs, and departments.

---

### 5. High-Risk Features
Important features that directly affect users should be automated.

**Example:**  
Creating a new course is an important function, so it should always be tested automatically.

---

# 2. Automate or Manual

| Test Case | Decision | Reason |
|-----------|----------|--------|
| Regression testing for CRUD APIs | Automate | Runs after every code change. |
| Exploratory testing of a new feature | Manual | Requires human observation and creativity. |
| Performance testing with 100 users | Automate | Load testing tools can perform this efficiently. |
| Login page UI testing | Automate | Frequently tested and easy to automate. |
| Verify Swagger documentation | Manual | Documentation changes are not frequent. |
| Smoke test after deployment | Automate | Quick verification after every deployment. |

---

# 3. Test Automation ROI

ROI (Return on Investment) tells us whether automation saves more time than manual testing.

### Given

- Time to automate = 4 hours = 240 minutes
- Manual execution = 30 minutes

Number of runs required:

240 ÷ 30 = **8 runs**

So, after **8 executions**, automation starts saving time.

After the 10th run, there will be some maintenance work, but automation is still beneficial because it reduces manual effort.

---

# 4. Flaky Test

A flaky test is a test that sometimes passes and sometimes fails even though the application has not changed.

### Example

A Selenium script tries to click a button before it becomes visible. Sometimes it works, and sometimes it fails.

### How to Avoid Flaky Tests

- Use Explicit Wait instead of `time.sleep()`.
- Use stable locators like ID or Name.
- Keep test data consistent.

---

# Task 2: Automation Framework Types

## 1. Linear Framework

The Linear Framework is the simplest automation framework. Test cases are written one after another in a single script.

**Advantage**
- Easy to understand.

**Disadvantage**
- Code cannot be reused.

**Example**
Testing only the login page.

---

## 2. Modular Framework

In this framework, the application is divided into different modules, and each module has its own script.

**Advantage**
- Code can be reused.

**Disadvantage**
- Managing many modules can become difficult.

**Example**
Separate modules for Login, Course, and Student.

---

## 3. Data-Driven Framework

This framework stores test data separately from the test script.

**Advantage**
- Same script can be used with different inputs.

**Disadvantage**
- Slightly difficult to set up.

**Example**
Testing login using multiple usernames and passwords.

---

## 4. Keyword-Driven Framework

The test steps are written using keywords like Login, Click, Enter Text, etc.

**Advantage**
- Non-technical testers can understand the tests.

**Disadvantage**
- Initial setup takes time.

**Example**
A QA tester creates test cases using keywords without writing code.

---

## 5. Hybrid Framework

A Hybrid Framework combines the features of Modular, Data-Driven, and Keyword-Driven frameworks.

**Advantage**
- Flexible and reusable.

**Disadvantage**
- More complex than other frameworks.

**Example**
Large Selenium projects with many test cases.

---

# 2. Recommended Framework

For the Course Management System, I would recommend a **Hybrid Framework**.

### Reasons

- Login steps can be reused.
- Different test data can be stored in Excel or CSV files.
- It supports both technical and non-technical team members.
- It is easy to maintain as the project grows.




