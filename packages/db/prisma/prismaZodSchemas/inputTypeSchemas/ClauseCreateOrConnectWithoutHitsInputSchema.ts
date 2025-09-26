import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseCreateWithoutHitsInputSchema } from './ClauseCreateWithoutHitsInputSchema';
import { ClauseUncheckedCreateWithoutHitsInputSchema } from './ClauseUncheckedCreateWithoutHitsInputSchema';

export const ClauseCreateOrConnectWithoutHitsInputSchema: z.ZodType<Prisma.ClauseCreateOrConnectWithoutHitsInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ClauseCreateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutHitsInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseCreateOrConnectWithoutHitsInput>;

export default ClauseCreateOrConnectWithoutHitsInputSchema;
