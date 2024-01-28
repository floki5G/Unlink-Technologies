import { useState } from "react";
import { PostSyllabusApi } from "../../services/apis/apis";
import { toast } from "react-toastify";
import { Switch } from "@headlessui/react";

export function SyllabusComponent() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [enabled, setEnabled] = useState(false);

  async function handelSyllabus() {
    try {
      setLoading(true);

      const payload = {
        name: name,
        description: description,
        is_active: true,
        is_disabled: false,
        is_primary: enabled,
      };

      const res = await PostSyllabusApi(payload);

      if (res.status === "success") {
        console.log(res.data);
        toast.success("Description Created");
      } else {
        toast.error("something went wrong");
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
        className="peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />

      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label htmlFor="description" className="sr-only">
          syllabus desc
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          rows={4}
          className="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder="Write a description..."
          required
        ></textarea>
      </div>
      <Switch.Group>
        <div className="flex items-center">
          <Switch.Label className="mr-4"> is primary</Switch.Label>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>

      <button
        type="button"
        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handelSyllabus}
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
