import { Sidebar } from "primereact/sidebar";
// import { useState } from "react";

export default function Chat({ visible, setVisible }: { visible: boolean, setVisible: (value: boolean) => void }) {

    // const [messages, setMessages] = useState<string[]>([]);


    return (
        <div className="p-4">


            <Sidebar
                className="w-140"
                visible={visible}
                position="right"
                onHide={() => setVisible(false)}
            >
                <div className=" flex flex-col items-center justify-center h-full ">
                    <div className="flex flex-col items-center justify-center text-center gap-2">
                        <img className="filter grayscale " src="/photos/comingsoon.svg" alt="" />
                        <p className="text-3xl">Comming Soon</p>
                        <p>Chat is under development</p>
                    </div>

                </div>
            </Sidebar>

        </div>
    );

}
