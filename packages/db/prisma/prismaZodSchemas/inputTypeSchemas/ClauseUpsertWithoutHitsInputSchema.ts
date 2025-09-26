import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseUpdateWithoutHitsInputSchema } from './ClauseUpdateWithoutHitsInputSchema';
import { ClauseUncheckedUpdateWithoutHitsInputSchema } from './ClauseUncheckedUpdateWithoutHitsInputSchema';
import { ClauseCreateWithoutHitsInputSchema } from './ClauseCreateWithoutHitsInputSchema';
import { ClauseUncheckedCreateWithoutHitsInputSchema } from './ClauseUncheckedCreateWithoutHitsInputSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';

export const ClauseUpsertWithoutHitsInputSchema: z.ZodType<Prisma.ClauseUpsertWithoutHitsInput> = z.object({
  update: z.union([ z.lazy(() => ClauseUpdateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutHitsInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutHitsInputSchema) ]),
  where: z.lazy(() => ClauseWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ClauseUpsertWithoutHitsInput>;

export default ClauseUpsertWithoutHitsInputSchema;
