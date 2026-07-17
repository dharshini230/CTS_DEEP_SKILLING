from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.maximize_window()
driver.implicitly_wait(10)

driver.get("https://www.lambdatest.com/selenium-playground/")

driver.find_element(By.LINK_TEXT, "Simple Form Demo").click()

assert "simple-form-demo" in driver.current_url
print("URL verified successfully.")

driver.back()

driver.execute_script("window.open('https://www.google.com');")

print("Window Handles:", driver.window_handles)

driver.switch_to.window(driver.window_handles[1])

print("Google Title:", driver.title)

driver.switch_to.window(driver.window_handles[0])

driver.save_screenshot("playground_screenshot.png")
print("Screenshot saved successfully.")

print("Current Window Size:", driver.get_window_size())

driver.set_window_size(1280, 800)



driver.quit()