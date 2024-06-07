import { Button } from "primereact/button";


export default function Footer() {

    return (

        <footer className="flex items-center justify-between bottom-6 p-12 pb-6 mt-auto">
            <p className="text-gray text-3.5 font-semibold">Created by : Abdullah Barakat</p>
            <div className="flex items-center gap-4">
                <Button
                label="Github"
                severity="secondary"
                size="small"
                text
                onClick={()=>window.location.replace("https://github.com/snacomds")}
                />
                <Button
                label="About"
                severity="secondary"
                size="small"
                text
                />
                <Button
                label="Support"
                severity="secondary"
                size="small"
                text
                />
            </div>
        </footer>

    )
}