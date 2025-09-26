import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutHitsInputSchema } from './ClauseCreateWithoutHitsInputSchema';
import { ClauseUncheckedCreateWithoutHitsInputSchema } from './ClauseUncheckedCreateWithoutHitsInputSchema';
import { ClauseCreateOrConnectWithoutHitsInputSchema } from './ClauseCreateOrConnectWithoutHitsInputSchema';
import { ClauseUpsertWithoutHitsInputSchema } from './ClauseUpsertWithoutHitsInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateToOneWithWhereWithoutHitsInputSchema } from './ClauseUpdateToOneWithWhereWithoutHitsInputSchema';
import { ClauseUpdateWithoutHitsInputSchema } from './ClauseUpdateWithoutHitsInputSchema';
import { ClauseUncheckedUpdateWithoutHitsInputSchema } from './ClauseUncheckedUpdateWithoutHitsInputSchema';

export const ClauseUpdateOneRequiredWithoutHitsNestedInputSchema: z.ZodType<Prisma.ClauseUpdateOneRequiredWithoutHitsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutHitsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutHitsInputSchema).optional(),
  upsert: z.lazy(() => ClauseUpsertWithoutHitsInputSchema).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateToOneWithWhereWithoutHitsInputSchema),z.lazy(() => ClauseUpdateWithoutHitsInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutHitsInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdateOneRequiredWithoutHitsNestedInput>;

export default ClauseUpdateOneRequiredWithoutHitsNestedInputSchema;
