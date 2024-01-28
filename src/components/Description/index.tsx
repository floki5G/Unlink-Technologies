import { useEffect, useState } from "react";
import { NewJoditEditor } from "../../features/NewJoditEditor";
import { PostDescriptionUpsertApi } from "../../services/apis/apis";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/configure-store";

export function Description() {
  const selectSyncData = useAppSelector((state) => state.details);
  const [content, setContent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;

    const descriptionDetails = selectSyncData.descriptions.filter(
      (description) => description?.id === Number(id),
    );
    if (!descriptionDetails.length) return;
    setContent(descriptionDetails[0].description);
    setName(descriptionDetails[0].name);
  }, [id, selectSyncData.descriptions]);
  async function handelDescription() {
    try {
      setLoading(true);
      const payload = {
        id: id ? Number(id) : undefined,
        name: name,
        description: content,
        is_active: true,
        is_disabled: false,
      };
      const res = await PostDescriptionUpsertApi(payload);
      if (res.status === "success") {
        console.log(res.data);
        toast.success(res.message ?? "description created successfully");
      } else {
        toast.error(
          res.message ?? "something went wrong please try again later ",
        );
      }
    } catch (error) {
      toast.error("something went wrong please try again later ");
      console.log(error);
    } finally {
      setLoading(false);
      console.log("done");
    }
  }

  return (
    <>
      <input
        value={name}
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
        ) : id ? (
          "Update"
        ) : (
          "Create"
        )}
      </button>
    </>
  );
}
