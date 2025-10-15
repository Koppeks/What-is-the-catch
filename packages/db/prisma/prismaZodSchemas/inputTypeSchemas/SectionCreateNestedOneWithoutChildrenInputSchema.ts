import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutChildrenInputSchema } from './SectionCreateWithoutChildrenInputSchema';
import { SectionUncheckedCreateWithoutChildrenInputSchema } from './SectionUncheckedCreateWithoutChildrenInputSchema';
import { SectionCreateOrConnectWithoutChildrenInputSchema } from './SectionCreateOrConnectWithoutChildrenInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionCreateNestedOneWithoutChildrenInputSchema: z.ZodType<Prisma.SectionCreateNestedOneWithoutChildrenInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutChildrenInputSchema), z.lazy(() => SectionUncheckedCreateWithoutChildrenInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutChildrenInputSchema).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
});

export default SectionCreateNestedOneWithoutChildrenInputSchema;
