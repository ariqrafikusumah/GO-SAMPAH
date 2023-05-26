import { Footer } from "../components/footer";
import { Navbar } from "../components/header";
import "../assets/css/style.css";
import { FloatButton } from "antd";
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { About, Drop_point, Layanan, Main_content, Proses_model } from "../components/main";

export default function Home() {

    return (
        <div>
            <FloatButton.Group
                trigger="click"
                type="primary"
                shape="square"

                style={{
                    right: 24,
                }}
                icon={<CustomerServiceOutlined />}
            >
                <FloatButton />
                <FloatButton icon={<CommentOutlined />} />
            </FloatButton.Group>
            <FloatButton.BackTop
                style={{
                    right: 94,
                }}
            />
            <Navbar />
            <Main_content />
            <About />
            <Drop_point />
            <Proses_model />
            <Layanan />
            <Footer />

        </div>
    )
}
