from pages.input_form_page import InputFormPage


def test_input_form(driver, base_url):

    page = InputFormPage(driver)

    page.navigate_to(base_url + "input-form-demo")

    page.fill_form()

    page.submit_form()

    assert "Thanks" in page.get_success_message()