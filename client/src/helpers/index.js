export function formatPostData(data) {
    const output = new URLSearchParams();

    for (let [k, v] of Object.entries(data)) {
        output.append(k, v);
    }

    return output;
}
