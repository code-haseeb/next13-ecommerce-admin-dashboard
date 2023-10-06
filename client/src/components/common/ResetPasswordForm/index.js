import { Row, Col } from "reactstrap";

import Input from "../Input";
import Button from "../Button";
const ResetPasswordForm = (props) => {
  const {
    resetFormData,
    formErrors,
    isToken,
    resetPasswordChange,
    resetPassword,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    resetPassword();
    return (
      <div className="reset-password-name">
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs="12" lg="6">
              <input
                type={"password"}
                error={formErrors["password"]}
                label={"Password"}
                name={"password"}
                placeholder={isToken ? "password" : "old password"}
                value={resetFormData.password}
                onInputChange={(name, value) =>
                  resetPasswordChange(name, value)
                }
              />
            </Col>
            <Col xs="12" lg="6">
              <input
                type={"password"}
                error={formErrors["confirmPassword"]}
                label={"Confirm Password"}
                name={"confirmPassword"}
                placeholder={"Confirm Password"}
                value={resetFormData.password}
                onInputChange={(name, value) =>
                  resetPasswordChange(name, value)
                }
              />
            </Col>
          </Row>
          <hr />
          <div className="reset-actions">
            <Button type="submit" text="Reset Password" />
          </div>
        </form>
      </div>
    );
  };
};
export default ResetPasswordForm;
