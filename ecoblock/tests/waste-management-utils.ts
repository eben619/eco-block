import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CompanyAdded,
  PickupCanceled,
  PickupCompleted,
  PickupRejected,
  PickupRequested,
  RewardDistributed
} from "../generated/WasteManagement/WasteManagement"

export function createCompanyAddedEvent(
  companyId: BigInt,
  name: string,
  walletAddress: Address
): CompanyAdded {
  let companyAddedEvent = changetype<CompanyAdded>(newMockEvent())

  companyAddedEvent.parameters = new Array()

  companyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "companyId",
      ethereum.Value.fromUnsignedBigInt(companyId)
    )
  )
  companyAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  companyAddedEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )

  return companyAddedEvent
}

export function createPickupCanceledEvent(
  requestId: BigInt,
  requester: Address
): PickupCanceled {
  let pickupCanceledEvent = changetype<PickupCanceled>(newMockEvent())

  pickupCanceledEvent.parameters = new Array()

  pickupCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  pickupCanceledEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )

  return pickupCanceledEvent
}

export function createPickupCompletedEvent(
  requestId: BigInt,
  requester: Address,
  gpsAddress: string,
  wasteTypes: Array<string>
): PickupCompleted {
  let pickupCompletedEvent = changetype<PickupCompleted>(newMockEvent())

  pickupCompletedEvent.parameters = new Array()

  pickupCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  pickupCompletedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  pickupCompletedEvent.parameters.push(
    new ethereum.EventParam("gpsAddress", ethereum.Value.fromString(gpsAddress))
  )
  pickupCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "wasteTypes",
      ethereum.Value.fromStringArray(wasteTypes)
    )
  )

  return pickupCompletedEvent
}

export function createPickupRejectedEvent(
  requestId: BigInt,
  requester: Address,
  rejectionReason: string
): PickupRejected {
  let pickupRejectedEvent = changetype<PickupRejected>(newMockEvent())

  pickupRejectedEvent.parameters = new Array()

  pickupRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  pickupRejectedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  pickupRejectedEvent.parameters.push(
    new ethereum.EventParam(
      "rejectionReason",
      ethereum.Value.fromString(rejectionReason)
    )
  )

  return pickupRejectedEvent
}

export function createPickupRequestedEvent(
  requestId: BigInt,
  requester: Address,
  gpsAddress: string,
  wasteTypes: Array<string>,
  pickupDate: BigInt,
  pickupTime: BigInt
): PickupRequested {
  let pickupRequestedEvent = changetype<PickupRequested>(newMockEvent())

  pickupRequestedEvent.parameters = new Array()

  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam("gpsAddress", ethereum.Value.fromString(gpsAddress))
  )
  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "wasteTypes",
      ethereum.Value.fromStringArray(wasteTypes)
    )
  )
  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pickupDate",
      ethereum.Value.fromUnsignedBigInt(pickupDate)
    )
  )
  pickupRequestedEvent.parameters.push(
    new ethereum.EventParam(
      "pickupTime",
      ethereum.Value.fromUnsignedBigInt(pickupTime)
    )
  )

  return pickupRequestedEvent
}

export function createRewardDistributedEvent(
  user: Address,
  points: BigInt
): RewardDistributed {
  let rewardDistributedEvent = changetype<RewardDistributed>(newMockEvent())

  rewardDistributedEvent.parameters = new Array()

  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardDistributedEvent.parameters.push(
    new ethereum.EventParam("points", ethereum.Value.fromUnsignedBigInt(points))
  )

  return rewardDistributedEvent
}
