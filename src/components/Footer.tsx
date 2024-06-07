import { Button } from "primereact/button";


export default function Footer() {

    return (
        <footer className="flex items-center justify-between px-12 pb-6">
            <p className="text-gray font-semibold">Created by : Abdullah Barakat</p>
            <div className="flex items-center gap-4">
                <Button
                label="Github"
                severity="secondary"
                text
                onClick={()=>window.location.replace("https://github.com/snacomds")}
                />
                <Button
                label="About"
                severity="secondary"
                text
                />
                <Button
                label="Support"
                severity="secondary"
                text
                />
            </div>
        </footer>
    )
}