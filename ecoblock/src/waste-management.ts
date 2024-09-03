import {
  CompanyAdded as CompanyAddedEvent,
  PickupCanceled as PickupCanceledEvent,
  PickupCompleted as PickupCompletedEvent,
  PickupRejected as PickupRejectedEvent,
  PickupRequested as PickupRequestedEvent,
  RewardDistributed as RewardDistributedEvent,
} from "../generated/WasteManagement/WasteManagement"
import {
  CompanyAdded,
  PickupCanceled,
  PickupCompleted,
  PickupRejected,
  PickupRequested,
  RewardDistributed,
} from "../generated/schema"

export function handleCompanyAdded(event: CompanyAddedEvent): void {
  let entity = new CompanyAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.companyId = event.params.companyId
  entity.name = event.params.name
  entity.walletAddress = event.params.walletAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePickupCanceled(event: PickupCanceledEvent): void {
  let entity = new PickupCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePickupCompleted(event: PickupCompletedEvent): void {
  let entity = new PickupCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester
  entity.gpsAddress = event.params.gpsAddress
  entity.wasteTypes = event.params.wasteTypes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePickupRejected(event: PickupRejectedEvent): void {
  let entity = new PickupRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester
  entity.rejectionReason = event.params.rejectionReason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePickupRequested(event: PickupRequestedEvent): void {
  let entity = new PickupRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.requestId = event.params.requestId
  entity.requester = event.params.requester
  entity.gpsAddress = event.params.gpsAddress
  entity.wasteTypes = event.params.wasteTypes
  entity.pickupDate = event.params.pickupDate
  entity.pickupTime = event.params.pickupTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardDistributed(event: RewardDistributedEvent): void {
  let entity = new RewardDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.points = event.params.points

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
