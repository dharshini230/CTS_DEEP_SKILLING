from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.maximize_window()
driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

# By ID
message = driver.find_element(By.ID, "user-message")
message.clear()
message.send_keys("Locator using ID")

# By Name
message = driver.find_element(By.NAME, "user-message")
message.clear()
message.send_keys("Locator using Name")

# By Class Name
message = driver.find_element(By.CLASS_NAME, "form-control")
message.clear()
message.send_keys("Locator using Class Name")

# By Tag Name
message = driver.find_element(By.TAG_NAME, "input")
message.clear()
message.send_keys("Locator using Tag Name")

# Absolute XPath
message = driver.find_element(By.XPATH, "/html/body/div[2]/section[1]/div/div/div[2]/div/div/div[1]/input")
message.clear()
message.send_keys("Absolute XPath")

# Relative XPath
message = driver.find_element(By.XPATH, "//input[@id='user-message']")
message.clear()
message.send_keys("Relative XPath")

# CSS Selector by ID
message = driver.find_element(By.CSS_SELECTOR, "#user-message")
message.clear()
message.send_keys("CSS ID")

# CSS Selector by Attribute
message = driver.find_element(By.CSS_SELECTOR, "input[name='user-message']")
message.clear()
message.send_keys("CSS Attribute")

# CSS Selector Parent Child
message = driver.find_element(By.CSS_SELECTOR, "div.w-full input")
message.clear()
message.send_keys("CSS Parent Child")

driver.find_element(By.ID, "showInput").click()

driver.get("https://www.lambdatest.com/selenium-playground/checkbox-demo")

label = driver.find_element(By.XPATH, "//label[text()='Option 1']")
print(label.text)

labels = driver.find_elements(By.XPATH, "//label[contains(text(),'Option')]")

for item in labels:
    print(item.text)

driver.quit()