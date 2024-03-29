const nextItemInList = <T>(list: T[], value: T) => {
    const currValueIdx = list.indexOf(value);
    const nextValueIdx = (currValueIdx + 1) % list.length;
    return list[nextValueIdx];
}

export default nextItemInList;