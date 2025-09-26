import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutHitsInputSchema } from './ClauseCreateWithoutHitsInputSchema';
import { ClauseUncheckedCreateWithoutHitsInputSchema } from './ClauseUncheckedCreateWithoutHitsInputSchema';
import { ClauseCreateOrConnectWithoutHitsInputSchema } from './ClauseCreateOrConnectWithoutHitsInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';

export const ClauseCreateNestedOneWithoutHitsInputSchema: z.ZodType<Prisma.ClauseCreateNestedOneWithoutHitsInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseCreateNestedOneWithoutHitsInput>;

export default ClauseCreateNestedOneWithoutHitsInputSchema;
