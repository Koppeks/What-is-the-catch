import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutParentInputSchema } from './ClauseCreateWithoutParentInputSchema';
import { ClauseUncheckedCreateWithoutParentInputSchema } from './ClauseUncheckedCreateWithoutParentInputSchema';

export const ClauseCreateOrConnectWithoutParentInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutParentInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutParentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCreateOrConnectWithoutParentInput>;

export default ClauseCreateOrConnectWithoutParentInputSchema;
