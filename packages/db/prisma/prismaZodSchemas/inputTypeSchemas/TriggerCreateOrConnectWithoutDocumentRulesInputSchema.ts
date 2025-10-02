import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerWhereUniqueInputSchema } from './TriggerWhereUniqueInputSchema';
import { TriggerCreateWithoutDocumentRulesInputSchema } from './TriggerCreateWithoutDocumentRulesInputSchema';
import { TriggerUncheckedCreateWithoutDocumentRulesInputSchema } from './TriggerUncheckedCreateWithoutDocumentRulesInputSchema';

export const TriggerCreateOrConnectWithoutDocumentRulesInputSchema: z.ZodType<Prisma.TriggerCreateOrConnectWithoutDocumentRulesInput> = z.strictObject({
  where: z.lazy(() => TriggerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TriggerCreateWithoutDocumentRulesInputSchema), z.lazy(() => TriggerUncheckedCreateWithoutDocumentRulesInputSchema) ]),
});

export default TriggerCreateOrConnectWithoutDocumentRulesInputSchema;
