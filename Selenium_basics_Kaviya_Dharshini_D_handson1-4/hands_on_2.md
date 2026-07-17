# HANDS-ON 2
# SDLC vs TDLC – V-Model & Agile QA Integration

---

# Task 1: V-Model Mapping

## 1. V-Model

The V-Model shows that every development phase has a corresponding testing phase.

```
             Requirements
                  |
             System Design
                  |
         Architecture Design
                  |
            Module Design
                  |
                Coding
                  |
            Unit Testing
                  |
        Integration Testing
                  |
           System Testing
                  |
        Acceptance Testing
```

### SDLC and TDLC Mapping

| SDLC Phase | TDLC Phase |
|------------|------------|
| Requirements | Acceptance Testing |
| System Design | System Testing |
| Architecture Design | Integration Testing |
| Module Design | Unit Testing |
| Coding | Execution of Tests |

---

## 2. Test Artifacts

During every development phase, QA prepares documents that will be useful during testing.

| Development Phase | Test Artifact |
|-------------------|---------------|
| Requirements | Acceptance Test Plan |
| System Design | System Test Plan |
| Architecture Design | Integration Test Plan |
| Module Design | Unit Test Cases |
| Coding | Source Code |

---

## 3. Entry and Exit Criteria

### Unit Testing

**Entry Criteria**
- Module coding is completed.
- Unit test cases are ready.

**Exit Criteria**
- All unit tests are executed.
- No major bugs are found.

---

### Integration Testing

**Entry Criteria**
- Unit testing is completed.
- Modules are ready to be connected.

**Exit Criteria**
- Modules work together properly.
- Major integration issues are fixed.

---

### System Testing

**Entry Criteria**
- Entire application is completed.
- Test environment is available.

**Exit Criteria**
- All system test cases are completed.
- No Critical or High severity bugs remain.

---

### Acceptance Testing

**Entry Criteria**
- System testing is completed.
- Software is ready for the customer.

**Exit Criteria**
- Customer accepts the application.
- All business requirements are satisfied.

---

## 4. Where QA Should Participate Early

QA should not wait until coding is finished.

### Requirement Review

QA reads the requirements carefully. If something is confusing or missing, they discuss it with the team before development starts.

### Design Review

QA also reviews the system design. This helps them understand how testing should be done and what possible risks may occur.

---

# Task 2: Agile QA and Shift-Left Testing

## 5. Problems in Waterfall Model

### Problem 1

Testing starts only after development is completed. If bugs are found, fixing them becomes difficult and time-consuming.

### Problem 2

If there is a mistake in the requirements, it is usually found very late, which increases the project cost.

### Problem 3

Customers see the software only at the end. If they request changes, a lot of rework is needed.

---

## 6. QA Role in Agile

### Sprint Planning

- Understand the user stories.
- Discuss acceptance criteria.
- Estimate testing work.

### Daily Stand-up

- Share testing progress.
- Mention any blockers.
- Coordinate with developers.

### Sprint Review

- Verify completed features.
- Check whether the requirements are satisfied.
- Demonstrate the tested features.

### Retrospective

- Discuss what went well.
- Share problems faced during testing.
- Suggest improvements for the next sprint.



## 7. Shift-Left Testing

### a) Requirement Review

QA reviews the requirements before coding starts. This helps avoid misunderstandings later.

### b) Writing Test Cases Before Coding

QA prepares test cases early. Developers also get a better idea of what needs to be implemented.

### c) Static Code Analysis

Developers use tools to identify coding mistakes without running the program. This improves code quality.

### d) API Contract Testing

Before integrating the frontend and backend, the API is checked to make sure both sides follow the same specifications.



## 8. Acceptance Criteria (Given-When-Then)

### Scenario 1 – Create Course Successfully

**Given**
The college admin is logged into the application.

**When**
The admin enters valid course details and clicks the Create button.

**Then**
The course should be created successfully and displayed in the course list.



### Scenario 2 – Duplicate Course Code

**Given**
A course with the same course code already exists.

**When**
The admin tries to create another course using the same code.

**Then**
The application should display an error message saying the course code already exists.



### Scenario 3 – Required Fields Missing

**Given**
The admin opens the Create Course page.

**When**
The admin submits the form without entering mandatory fields.

**Then**
The application should display validation messages and should not create the course.



