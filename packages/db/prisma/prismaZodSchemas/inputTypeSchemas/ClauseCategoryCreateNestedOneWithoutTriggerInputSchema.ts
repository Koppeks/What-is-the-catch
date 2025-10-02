import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ClauseCategoryCreateWithoutTriggerInputSchema } from './ClauseCategoryCreateWithoutTriggerInputSchema';
import { ClauseCategoryUncheckedCreateWithoutTriggerInputSchema } from './ClauseCategoryUncheckedCreateWithoutTriggerInputSchema';
import { ClauseCategoryCreateOrConnectWithoutTriggerInputSchema } from './ClauseCategoryCreateOrConnectWithoutTriggerInputSchema';
import { ClauseCategoryWhereUniqueInputSchema } from './ClauseCategoryWhereUniqueInputSchema';

export const ClauseCategoryCreateNestedOneWithoutTriggerInputSchema: z.ZodType<Prisma.ClauseCategoryCreateNestedOneWithoutTriggerInput> = z.strictObject({
  create: z.union([ z.lazy(() => ClauseCategoryCreateWithoutTriggerInputSchema), z.lazy(() => ClauseCategoryUncheckedCreateWithoutTriggerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ClauseCategoryCreateOrConnectWithoutTriggerInputSchema).optional(),
  connect: z.lazy(() => ClauseCategoryWhereUniqueInputSchema).optional(),
});

export default ClauseCategoryCreateNestedOneWithoutTriggerInputSchema;
