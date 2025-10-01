import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateWithoutParentInputSchema } from './ClauseUpdateWithoutParentInputSchema';
import { ClauseUncheckedUpdateWithoutParentInputSchema } from './ClauseUncheckedUpdateWithoutParentInputSchema';
import { ClauseCreateWithoutParentInputSchema } from './ClauseCreateWithoutParentInputSchema';
import { ClauseUncheckedCreateWithoutParentInputSchema } from './ClauseUncheckedCreateWithoutParentInputSchema';

export const ClauseUpsertWithWhereUniqueWithoutParentInputSchema: z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutParentInput> = z.object({
  where: z.lazy(() => ClauseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ClauseUpdateWithoutParentInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutParentInputSchema) ]),
  create: z.union([ z.lazy(() => ClauseCreateWithoutParentInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutParentInputSchema) ]),
}).strict() as z.ZodType<Prisma.ClauseUpsertWithWhereUniqueWithoutParentInput>;

export default ClauseUpsertWithWhereUniqueWithoutParentInputSchema;
