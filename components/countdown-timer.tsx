import { useEffect, useMemo, useState } from "react"
import { Text, View } from "react-native"

import { CountdownNumberCard } from "./countdown-number-card"
import { CountdownDots } from "./countdown-dots"

const startDate = "2024-11-14T01:04:27-0300"

export function CountdownTimer() {

  const targetTime = new Date(startDate).getTime()
  const [currentTime, setCurrentTime] = useState(Date.now())
  const timeBetween = useMemo(() => targetTime - currentTime, [currentTime, targetTime])

  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeBetween % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeBetween % (1000 * 60)) / 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeBetween <= 0) {
        clearInterval(interval)
      } else {
        setCurrentTime(Date.now())
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [timeBetween])

  return (
    <View className="items-center">
      <Text className="text-base text-white font-bruno mb-3">Lançamento em:</Text>

      <View className="flex flex-row items-center">
        <CountdownNumberCard number={days} suffix={"D"} />

        <CountdownDots />

        <CountdownNumberCard number={hours} suffix={"H"} />

        <CountdownDots />

        <CountdownNumberCard number={minutes} suffix={"M"} />

        <CountdownDots />

        <CountdownNumberCard number={seconds} suffix={"S"} />
      </View>
    </View>
  )
}
