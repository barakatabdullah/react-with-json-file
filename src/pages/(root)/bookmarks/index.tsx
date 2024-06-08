import { DataView } from "primereact/dataview";
import { ItemTemplate } from "../_components/ItemsTemplate";
import Header from "../../../components/Header";
import { useUserStore } from "../../../stores/user";


export default function Bookmarks() {
  const userStore = useUserStore();

  return (
    <div className="p-8">
      <Header title="Bookmarks" />
      <div>
        <DataView
          value={userStore.bookmarks}
          layout="grid"
          pt={{
            root: { className: "rounded-2 overflow-hidden border" },
            content: { className: "p4" },
            grid: {
              className:
                "grid grid-cols-4 gap-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1",
            },
          }}
          itemTemplate={ItemTemplate}
          paginator
          alwaysShowPaginator={false}
          rows={8}
        />
      </div>
    </div>
  );
}
