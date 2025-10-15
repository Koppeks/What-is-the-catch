import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionCreateWithoutDocumentInputSchema } from './SectionCreateWithoutDocumentInputSchema';
import { SectionUncheckedCreateWithoutDocumentInputSchema } from './SectionUncheckedCreateWithoutDocumentInputSchema';

export const SectionCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.SectionCreateOrConnectWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => SectionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SectionCreateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default SectionCreateOrConnectWithoutDocumentInputSchema;
