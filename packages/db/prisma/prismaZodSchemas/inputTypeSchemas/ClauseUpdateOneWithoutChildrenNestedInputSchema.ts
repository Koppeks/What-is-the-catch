import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCreateWithoutChildrenInputSchema } from './ClauseCreateWithoutChildrenInputSchema';
import { ClauseUncheckedCreateWithoutChildrenInputSchema } from './ClauseUncheckedCreateWithoutChildrenInputSchema';
import { ClauseCreateOrConnectWithoutChildrenInputSchema } from './ClauseCreateOrConnectWithoutChildrenInputSchema';
import { ClauseUpsertWithoutChildrenInputSchema } from './ClauseUpsertWithoutChildrenInputSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { ClauseWhereUniqueInputSchema } from './ClauseWhereUniqueInputSchema';
import { ClauseUpdateToOneWithWhereWithoutChildrenInputSchema } from './ClauseUpdateToOneWithWhereWithoutChildrenInputSchema';
import { ClauseUpdateWithoutChildrenInputSchema } from './ClauseUpdateWithoutChildrenInputSchema';
import { ClauseUncheckedUpdateWithoutChildrenInputSchema } from './ClauseUncheckedUpdateWithoutChildrenInputSchema';

export const ClauseUpdateOneWithoutChildrenNestedInputSchema: z.ZodType<Prisma.ClauseUpdateOneWithoutChildrenNestedInput> = z.object({
  create: z.union([ z.lazy(() => ClauseCreateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCreateOrConnectWithoutChildrenInputSchema).optional(),
  upsert: z.lazy(() => ClauseUpsertWithoutChildrenInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ClauseWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ClauseWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ClauseWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseUpdateToOneWithWhereWithoutChildrenInputSchema),z.lazy(() => ClauseUpdateWithoutChildrenInputSchema),z.lazy(() => ClauseUncheckedUpdateWithoutChildrenInputSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.ClauseUpdateOneWithoutChildrenNestedInput>;

export default ClauseUpdateOneWithoutChildrenNestedInputSchema;
