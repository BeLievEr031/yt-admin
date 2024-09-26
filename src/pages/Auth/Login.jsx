import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Login() {
  const onSignup = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <Card
        title={
          <Flex gap={10}>
            <LockOutlined style={{ fontSize: "20px", color: "red" }} />
            Login
          </Flex>
        }
        bordered={true}
        style={{ width: 300 }}
      >
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: 360,
          }}
          onFinish={onSignup}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
            <div style={{ marginTop: "10px" }}>
              <Link to={"/auth/signup"} style={{ fontSize: "15px" }}>
                Create an account
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
}

export default Login;
