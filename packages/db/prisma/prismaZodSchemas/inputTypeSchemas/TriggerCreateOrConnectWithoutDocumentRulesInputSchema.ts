import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutDocumentRulesInputSchema } from './TriggerCreateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedCreateWithoutDocumentRulesInputSchema } from './TriggerUncheckedCreateWithoutDocumentRulesInputSchema';

export const TriggerCreateOrConnectWithoutDocumentRulesInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutDocumentRulesInput> = z.object({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutDocumentRulesInputSchema),z.lazy(() => TriggerUncheckedCreateWithoutDocumentRulesInputSchema) ]),
}).strict() as z.ZodType<Prisma.TriggerCreateOrConnectWithoutDocumentRulesInput>;

export default TriggerCreateOrConnectWithoutDocumentRulesInputSchema;
