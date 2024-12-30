import { getContacts } from "@/lib/data";
import { formatDate } from "@/utils/util";

export default async function ContactTable() {
  const contacts = await getContacts();
  return (
    <div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-gray-700 bg-gray-50">
          <tr className="uppercase">
            <th className="py-3 px-6">#</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Phone Number</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={contact.id} className="bg-white border-b">
              <td className="py-3 px-6">{index + 1}</td>
              <td className="py-3 px-6">{contact.nama}</td>
              <td className="py-3 px-6">{contact.phone}</td>
              <td className="py-3 px-6">
                {formatDate(contact.created_at.toString())}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
