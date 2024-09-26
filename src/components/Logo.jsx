import { YoutubeOutlined } from "@ant-design/icons";
import { Flex } from "antd";
function Logo({ collapsed }) {
  return (
    <Flex align="center" gap={10} justify="center">
      <YoutubeOutlined style={{ fontSize: "50px", color: "red" }} />
      {!collapsed && <h1 style={{ color: "white" }}>YouTube</h1>}
    </Flex>
  );
}

export default Logo;
