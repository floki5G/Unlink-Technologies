import { useState } from "react";
import { NewJoditEditor } from "../../features/NewJoditEditor";
import { PostDescriptionUpsertApi } from "../../services/apis/apis";
import { toast } from "react-toastify";

export function Description() {
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function handelDescription() {
    try {
      setLoading(true);

      const payload = {
        name: content,
        description: name,
        is_active: true,
        is_disabled: false,
      };

      const res = await PostDescriptionUpsertApi(payload);

      if (res.status === "success") {
        console.log(res.data);
        toast.success("Description Created");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("done");
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="mb-4">
        <NewJoditEditor placeholder={content} setPlaceholder={setContent} />
      </div>

      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handelDescription}
      >
        {loading ? (
          <div>
            <span
              className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
              role="status"
              aria-label="loading"
            ></span>
            Loading
          </div>
        ) : (
          "Create"
        )}
      </button>
    </>
  );
}
