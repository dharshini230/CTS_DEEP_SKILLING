from selenium.webdriver.common.by import By
from pages.base_page import BasePage


class InputFormPage(BasePage):

    NAME = (By.NAME, "name")
    EMAIL = (By.ID, "inputEmail4")
    PASSWORD = (By.ID, "inputPassword4")
    COMPANY = (By.NAME, "company")
    WEBSITE = (By.NAME, "website")
    CITY = (By.NAME, "city")
    ADDRESS = (By.ID, "inputAddress1")
    ADDRESS2 = (By.ID, "inputAddress2")
    STATE = (By.NAME, "state")
    ZIP = (By.NAME, "zip")
    SUBMIT = (By.XPATH, "//button[text()='Submit']")
    SUCCESS = (By.CLASS_NAME, "success-msg")

    def fill_form(self):

        self.driver.find_element(*self.NAME).send_keys("John")

        self.driver.find_element(*self.EMAIL).send_keys("john@gmail.com")

        self.driver.find_element(*self.PASSWORD).send_keys("123456")

        self.driver.find_element(*self.COMPANY).send_keys("ABC")

        self.driver.find_element(*self.WEBSITE).send_keys("www.abc.com")

        self.driver.find_element(*self.CITY).send_keys("Chennai")

        self.driver.find_element(*self.ADDRESS).send_keys("Anna Nagar")

        self.driver.find_element(*self.ADDRESS2).send_keys("Near Bus Stand")

        self.driver.find_element(*self.STATE).send_keys("Tamil Nadu")

        self.driver.find_element(*self.ZIP).send_keys("600001")

    def submit_form(self):
        self.driver.find_element(*self.SUBMIT).click()

    def get_success_message(self):
        return self.driver.find_element(*self.SUCCESS).text