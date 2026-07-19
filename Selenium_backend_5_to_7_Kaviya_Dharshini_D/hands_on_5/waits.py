from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException
import time

service = Service(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service)

driver.maximize_window()

driver.get("https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo")

button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "autoclosable-btn-success"))
)

button.click()

alert = WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))
)

print(alert.text)

start = time.time()

driver.refresh()

driver.find_element(By.ID, "autoclosable-btn-success").click()

time.sleep(3)

print("Sleep Time:", time.time() - start)

start = time.time()

driver.refresh()

WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "autoclosable-btn-success"))
).click()

WebDriverWait(driver, 10).until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))
)

print("Explicit Wait Time:", time.time() - start)

driver.refresh()

button = WebDriverWait(driver, 10).until(
    EC.element_to_be_clickable((By.ID, "autoclosable-btn-success"))
)

button.click()

wait = WebDriverWait(
    driver,
    timeout=10,
    poll_frequency=0.5,
    ignored_exceptions=[NoSuchElementException]
)

element = wait.until(
    EC.visibility_of_element_located((By.CSS_SELECTOR, ".alert-success"))
)

print(element.text)

driver.quit()