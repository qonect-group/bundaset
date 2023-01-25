import Image from "next/image";
import React from "react";
export default function Table() {
  return (
    <div className="mt-5 w-full overflow-auto md:overflow-hidden">
      <table className="text-white w-[56.25rem] md:w-full border-spacing-4 border-separate">
        <thead className="text-left text-sm text-white text-opacity-70 relative">
          <hr className="absolute w-full top-2 border-gray-600" />
          <hr className="absolute w-full -bottom-1 border-gray-600" />
          <tr>
            {["#", "TITLE", "ARTIST", "ALBUM", "DATE", "TIME"].map(
              (item: string, key: number) => {
                return (
                  <th
                    key={key}
                    scope="col"
                    className="font-medium py-3 uppercase"
                  >
                    {item}
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(0)
            .map((_, key) => {
              return (
                <tr className="relative top-3 " key={key}>
                  <td className="font-semibold w-8">1</td>
                  <td>
                    <div className="flex items-center w-fit gap-3">
                      <Image
                        alt=""
                        src="/assets/img/cover-1.png"
                        width={55}
                        height={52.34}
                        className="object-cover rounded"
                      />
                      <span className="font-semibold w-fit text-lg">
                        Runtuh
                      </span>
                    </div>
                  </td>
                  <td className="text-gray-100 text-[15px] font-medium">
                    Kiss Daniel
                  </td>
                  <td className="text-gray-100 text-[15px] font-medium">
                    Runtuh & bug
                  </td>
                  <td className="text-gray-100 text-[15px] font-medium">
                    3 days ago{" "}
                  </td>
                  <td className="text-gray-100 text-[15px] font-medium">
                    03:00
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
