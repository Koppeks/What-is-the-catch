import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutParentInputSchema } from './ClauseCreateWithoutParentInputSchema';
import { ClauseUncheckedCreateWithoutParentInputSchema } from './ClauseUncheckedCreateWithoutParentInputSchema';
import { ClauseCreateOrConnectWithoutParentInputSchema } from './ClauseCreateOrConnectWithoutParentInputSchema';
import { ClauseCreateManyParentInputEnvelopeSchema } from './ClauseCreateManyParentInputEnvelopeSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.ClauseUncheckedCreateNestedManyWithoutParentInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutParentInputSchema),z.lazy(() => ClauseCreateWithoutParentInputSchema).array(),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ClauseCreateOrConnectWithoutParentInputSchema),z.lazy(() => ClauseCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ClauseCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ClauseWhereUniqueInputSchema),z.lazy(() => ClauseWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUncheckedCreateNestedManyWithoutParentInput>;

export default ClauseUncheckedCreateNestedManyWithoutParentInputSchema;
