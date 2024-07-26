import DevSettingsContent from "@/components/DevSettingsContent";
import Link from "next/link";

const DevSttingsPage = () => {
  return (
    <div>
      <h1 className="font-bold">Dev Settings</h1>
      <div className="mt-4">
        <span>Published On: 2024-07-26</span> by{" "}
        <Link href="#">Ragib Barket</Link> under the{" "}
        <Link href="/docs/introduction">Genarel</Link> category.
      </div>
      <DevSettingsContent />
    </div>
  );
};

export default DevSttingsPage;
