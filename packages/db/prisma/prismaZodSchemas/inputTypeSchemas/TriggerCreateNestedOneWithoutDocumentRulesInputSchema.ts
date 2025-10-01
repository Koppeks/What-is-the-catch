import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerCreateWithoutDocumentRulesInputSchema } from './TriggerCreateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedCreateWithoutDocumentRulesInputSchema } from './TriggerUncheckedCreateWithoutDocumentRulesInputSchema';
import { TriggerCreateOrConnectWithoutDocumentRulesInputSchema } from './TriggerCreateOrConnectWithoutDocumentRulesInputSchema';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';

export const TriggerCreateNestedOneWithoutDocumentRulesInputSchema: z.ZodType<Prisma.TriggerCreateNestedOneWithoutDocumentRulesInput> = z.object({
  create: z.union([ z.lazy(() => TriggerCreateWithoutDocumentRulesInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutDocumentRulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TriggerCreateOrConnectWithoutDocumentRulesInputSchema).optional(),
  connect: z.lazy(() => TriggerWhereUniqueInputSchema).optional()
}).strict() as z.ZodType<Prisma.TriggerCreateNestedOneWithoutDocumentRulesInput>;

export default TriggerCreateNestedOneWithoutDocumentRulesInputSchema;
