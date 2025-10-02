import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateWithoutTriggerInputSchema } from './ClauseCategoryCreateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedCreateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedCreateWithoutTriggerInputSchema';
import { ClauseCategoryCreateOrConnectWithoutTriggerInputSchema } from './ClauseCategoryCreateOrConnectWithoutTriggerInputSchema';
import { ClauseCategoryUpsertWithoutTriggerInputSchema } from './ClauseCategoryUpsertWithoutTriggerInputSchema';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';
import { ClauseCategoryUpdateToOneWithWhereWithoutTriggerInputSchema } from './ClauseCategoryUpdateToOneWithWhereWithoutTriggerInputSchema';
import { ClauseCategoryUpdateWithoutTriggerInputSchema } from './ClauseCategoryUpdateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema';

export const ClauseCategoryUpdateOneRequiredWithoutTriggerNestedInputSchema: z.ZodType<Prisma.ClauseCategoryUpdateOneRequiredWithoutTriggerNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCategoryCreateOrConnectWithoutTriggerInputSchema).optional(),
  upsert: z.lazy(() => ClauseCategoryUpsertWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => ClauseCategoryWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ClauseCategoryUpdateToOneWithWhereWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUpdateWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUncheckedUpdateWithoutTriggerInputSchema) ]).optional(),
});

export default ClauseCategoryUpdateOneRequiredWithoutTriggerNestedInputSchema;
