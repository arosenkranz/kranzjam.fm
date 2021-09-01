export async function getPlayerInfo(player): Promise<object> {
  const playerInfo = await player.getCurrentState();
  return playerInfo;
}

export async function activatePlayer(player): Promise<void> {
  await player.activateElement();
}

export async function playPlayer(player): Promise<void> {
  await player.play();
}

export async function pausePlayer(player): Promise<void> {
  await player.pause();
}

export async function togglePlayer(player): Promise<void> {
  await player.togglePlay();
}

export async function seekPlayer(player, time): Promise<void> {
  await player.seek(time);
}

export async function setVolumePlayer(player, volume): Promise<void> {
  await player.setVolume(volume);
}

export async function getVolumePlayer(player): Promise<number> {
  return await player.getVolume();
}

export async function nextTrack(player): Promise<void> {
  await player.nextTrack();
}

export async function previousTrack(player): Promise<void> {
  await player.previousTrack();
}
