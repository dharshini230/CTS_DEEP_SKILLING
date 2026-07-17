# HANDS-ON 1
# QA Concepts, Functional Testing & Defect Lifecycle

---

# Task 1: QA Concepts

## 1. Test Cases for Different Testing Levels

### Unit Testing
**Description:**
Verify that the `add_course()` function correctly saves a course into the database.

**Test Case:**
- Input:
  - Course ID: C101
  - Course Name: Python
- Expected Result:
  - Course is successfully added to the database.

**Testing Type:** Functional Testing



### Integration Testing

**Description:**
Verify that the POST `/api/courses/` endpoint correctly stores course details in the database.

**Test Case:**
- Send a POST request with valid course details.
- Verify the API returns status code 201.
- Verify the course is stored in the database.

**Testing Type:** Functional Testing



### System Testing

**Description:**
Verify the complete course creation workflow.

**Test Case:**
1. Send POST request.
2. Store course in database.
3. Retrieve the course using GET request.

**Expected Result:**
The course should be successfully created and retrieved.

**Testing Type:** Functional Testing



### User Acceptance Testing (UAT)

**Description:**
Verify that a college administrator can successfully create a new course using the application.

**Expected Result:**
The admin should be able to create the course without any errors.

**Testing Type:** Functional Testing



## 2. Non-Functional Test Example

### Performance Testing

**Scenario:**
Verify that the GET `/api/courses/` endpoint returns all courses within 2 seconds even when the database contains 1000 records.

**Expected Result:**
The response time should be less than or equal to 2 seconds.



## 3. Black Box Testing vs White Box Testing

| Black Box Testing | White Box Testing |
|-------------------|-------------------|
| Internal code is not known. | Internal code is known. |
| Tests functionality. | Tests code logic and structure. |
| Performed by QA Engineers. | Performed by Developers. |
| Focuses on inputs and outputs. | Focuses on program flow and code coverage. |

### Difference

**Black Box Testing**
- Tester does not know the source code.
- Verifies system functionality.

**White Box Testing**
- Tester knows the source code.
- Verifies internal program logic.

Generally,
- QA Engineers perform Black Box Testing.
- Developers perform White Box Testing.



## 4. Formal Test Cases

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|--------------|-------------|---------------|------------|-----------------|---------------|-----------|
| TC001 | Create a new course | API server is running | Send POST request with valid course details | Status Code 201 Created | | |
| TC002 | Duplicate Course Code | Course already exists | Send POST request with same course code | Error message indicating duplicate course | | |
| TC003 | Missing Course Name | API server running | Send POST request without course name | Status Code 400 Bad Request | | |



# Task 2: Defect Lifecycle

## 5. Defect Lifecycle


New
   ↓
Assigned
   ↓
Open
   ↓
Fixed
   ↓
Retest
   ↓
Verified
   ↓
Closed


### Description

**New**
- Tester reports a new defect.

**Assigned**
- Defect is assigned to a developer.

**Open**
- Developer starts fixing the defect.

**Fixed**
- Developer fixes the issue.

**Retest**
- Tester verifies the fix.

**Verified**
- Tester confirms the issue is resolved.

**Closed**
- Defect is closed.

### Additional States

### Rejected
The developer rejects the defect because it is not a valid issue or cannot be reproduced.

### Deferred
The defect is valid but will be fixed in a future release.



## 6. Severity and Priority Classification

### a) POST /api/courses returns 500 Internal Server Error

**Severity:** Critical

**Priority:** P1

**Justification:**
The API is completely unusable and must be fixed immediately.



### b) Course names longer than 150 characters are truncated

**Severity:** Medium

**Priority:** P2

**Justification:**
The application works but data is lost.

---

### c) Swagger documentation contains a typo

**Severity:** Low

**Priority:** P4

**Justification:**
Only documentation is affected.

---

### d) Login occasionally returns 401 with correct credentials

**Severity:** High

**Priority:** P1

**Justification:**
Intermittent login failures affect users and should be fixed urgently.

---

## 7. Defect Report

| Field | Details |
|-------|---------|
| Defect ID | BUG-001 |
| Title | POST /api/courses returns Internal Server Error |
| Environment | Windows 11, Chrome Latest |
| Build Version | v1.0 |
| Severity | Critical |
| Priority | P1 |
| Steps to Reproduce | 1. Start API server.<br>2. Send POST request.<br>3. Observe response. |
| Expected Result | Course should be created successfully with Status Code 201. |
| Actual Result | Server returns Status Code 500 Internal Server Error. |
| Attachments | Screenshot of 500 Internal Server Error |

---

## 8. Difference Between Severity and Priority

### Severity
Severity indicates how much impact the defect has on the application.

### Priority
Priority indicates how quickly the defect should be fixed.

### Example

Suppose the company logo on the home page is slightly misaligned.

- Severity: Low
- Priority: High

Reason:
The issue does not affect application functionality but should be fixed immediately before an important client demonstration.

Another example:

A rarely used report crashes.

- Severity: High
- Priority: Low

Reason:
The issue is serious but affects very few users, so it can be scheduled for a later release.





